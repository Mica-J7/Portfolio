import './textarea.scss';

function Textarea({ value, onChange, maxLength, name }) {
  return (
    <div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={`(${maxLength} caractères max)`}
        rows="6"
        className="textarea-base"
      />
      <div className="char-counter">
        {value.length} / {maxLength}
      </div>
    </div>
  );
}

export default Textarea;
