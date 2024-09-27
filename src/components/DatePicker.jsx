import PropTypes from "prop-types"

/**
 * DatePicker component renders a date picker input field.
 *
 * @returns {JSX.Element}
 * @constructor
 * @property {string} dateName
 * @property {string} dateLabel
 * @property {function} handleChange
 * @property {string} formData
 * @property {string} min
 * @property {string} max
 */
export default function DatePicker({dateName, dateLabel, handleChange, formData, min, max}) {
    const minDate = min || new Date().getFullYear() - 100 + '-01-01'
    const maxDate = max || new Date().getFullYear() + '-12-31'

    return (
        <>
            <label htmlFor={dateLabel}>{dateName}</label>
            <input type="date" name={dateLabel}
                   className='w-60 h-8 rounded-md shadow-lg shadow-emerald-500/50'
                   onChange={handleChange} value={formData} id={dateLabel} min={minDate} max={maxDate} />
        </>
    )
}

DatePicker.propTypes = {
    dateName: PropTypes.string.isRequired,
    dateLabel: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    formData: PropTypes.string.isRequired,
    min: PropTypes.string,
    max: PropTypes.string
}