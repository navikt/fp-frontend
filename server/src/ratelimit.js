import rateLimit from 'express-rate-limit';

const limit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 1000,
  message: 'You have exceeded the 1000 requests in 1 minute limit!',
  headers: true,
});

export default limit;
