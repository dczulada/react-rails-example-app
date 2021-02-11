var React = require("react")
var PropTypes = require("prop-types")
var FhirVisualizers = require("fhir-visualizers")


class Fhir extends React.Component {
  render () {
    return (
      <div>
        <FhirVisualizers.PatientVisualizer patient={this.props.patient} />
        <FhirVisualizers.EncountersVisualizer rows={this.props.encounters} />
        <FhirVisualizers.ConditionsVisualizer rows={this.props.conditions} />
        <FhirVisualizers.ImmunizationsVisualizer rows={this.props.immunizations} />
      </div>
    );
  }
}

module.exports = Fhir
