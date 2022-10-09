type CheckProps = {
  columns: string[];
};

const CheckBoxsFilter = ({ columns }: CheckProps) => {
  return (
    <>
      {columns.map((col) => (
        <div key={col}>
          <input
            type="checkbox"
            name="checkbox"
            id={`checkbox_${col}`}
            value="value"
          />
          <label htmlFor={`checkbox_${col}`}>{col}</label>
        </div>
      ))}
    </>
  );
};

export default CheckBoxsFilter;
