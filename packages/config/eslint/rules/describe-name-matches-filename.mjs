// Generert av CHATGPT
import path from 'path';

export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensure the outermost describe() name matches the base filename (ignoring .spec/.test)',
    },
    schema: [],
  },

  create(context) {
    // filename normalization
    const rawFilename =
      (typeof context.getFilename === 'function' ? context.getFilename() : context.filename) ?? 'unknown';

    let filename = path.basename(rawFilename, path.extname(rawFilename));
    filename = filename.replace(/\.(spec|test)$/i, '');

    // create() is called once per file, but we still isolate state explicitly
    const state = { describeDepth: 0 };

    const isDescribeCall = callee => {
      if (!callee) return false;
      if (callee.type === 'Identifier' && callee.name === 'describe') return true;
      if (callee.type === 'MemberExpression') {
        const { object, property } = callee;
        if (object?.type === 'Identifier' && object.name === 'describe') return true;
        if (property?.type === 'Identifier' && property.name === 'describe') return true;
      }
      return false;
    };

    const getDescribeName = arg => {
      if (!arg) return null;
      if (arg.type === 'Literal' && typeof arg.value === 'string') return arg.value;
      if (arg.type === 'TemplateLiteral' && arg.expressions?.length === 0 && arg.quasis?.length === 1) {
        return arg.quasis[0].value.cooked ?? arg.quasis[0].value.raw ?? null;
      }
      return null;
    };

    return {
      CallExpression(node) {
        if (!isDescribeCall(node.callee)) return;
        const describeName = getDescribeName(node.arguments[0]);

        if (state.describeDepth === 0 && describeName && describeName !== filename) {
          context.report({
            node: node.arguments[0] ?? node,
            message: 'Outermost describe name "{{name}}" must match filename "{{filename}}".',
            data: { name: describeName, filename },
          });
        }

        state.describeDepth++;
      },

      'CallExpression:exit'(node) {
        if (isDescribeCall(node.callee)) {
          state.describeDepth--;
        }
      },
    };
  },
};
