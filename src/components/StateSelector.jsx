import states from '../mock/statesData.js';
import PropTypes from "prop-types";


/**
 * StateSelector component renders a dropdown list of U.S. states for selection.
 *
 * @param {Object} props
 * @param {function} props.onChange
 * @param {string} props.value
 *
 * @returns {JSX.Element}
 */
export default function StateSelector({ onChange, value}) {
    return (
        <>
            <label htmlFor="state">State</label>
            <select onChange={onChange} value={value || 'AL'} name="state" required
                    className='w-60 h-8 rounded-md bg-white shadow-lg shadow-emerald-500/50' id='state'>
                <option value=""></option>
                {states.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                        {state.name}
                    </option>
                ))}
            </select>
        </>
    )
}

StateSelector.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
}