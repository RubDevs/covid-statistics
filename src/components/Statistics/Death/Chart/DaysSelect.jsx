export const DaysSelect = ({
  day,
  setDay
}) => (
  <div className="mt-2">
    <label htmlFor="days" className="form-label">Days</label>
    <select
      className="form-select menu__select w-100"  
      value={day} 
      onChange={({ target }) => setDay(target.value)}
      id="days"
    >
      <option  value={'90'}>90</option>
      <option  value={'180'}>180</option>
      <option  value={'270'}>270</option>
    </select>
  </div>
);