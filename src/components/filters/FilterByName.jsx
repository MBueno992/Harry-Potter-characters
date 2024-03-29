import PropTypes from 'prop-types';

function FilterByName({ handleName, filterName }) {
  const handleEnter = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
    }
  };

  return (
    <label className="filters__name">
      Buscar por nombre
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Ej: Hermione "
        value={filterName}
        onChange={(ev) => {
          handleName(ev.target.value);
        }}
        onKeyDown={handleEnter}
      />
    </label>
  );
}

FilterByName.propTypes = {
  handleName: PropTypes.func,
  filterName: PropTypes.string,
};

export default FilterByName;
