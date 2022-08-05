# nav-datovelger

Simple datepicker basert på react-day-picker
https://www.npmjs.com/package/react-day-picker

# Use

```javascript
import { Datepicker, isISODateString } from 'nav-datovelger';

const BasicDatepicker = () => {
    const [date, setDate] = useState('');
    return (
        <Datepicker onChange={setDato} value={date} />
    );
};

const AdvancedDatePicker = () => {
    const [date, setDate] = useState<string>('');

    return (
        <Datepicker
            locale={'nb'}
            inputId="datepicker-input"
            value={date}
            onChange={setDate}
            inputProps={{
                name: 'dateInput',
                'aria-invalid': date !== '' && isISODateString(date) === false,
            }}
            calendarSettings={{ showWeekNumbers: true }}
            showYearSelector={true}
            limitations={{
                weekendsNotSelectable: false,
                invalidDateRanges: [{
                    from: '2020-04-10',
                    to: '2020-04-11',
                }],
                minDate: '2000-04-03',
                maxDate: '2020-12-12',
            }}
        />
    );
}
```
# Kjøre eksempel-app

Starter app med enkelt eksempel

```
npm run dev
```
