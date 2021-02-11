var React = require("react")
var PropTypes = require("prop-types")
var FhirVisualizers = require("fhir-visualizers")
var ObjectInspector = require("react-object-inspector")

class Fhir extends React.Component {

  render () {
    return (
      <div>
        <ObjectInspector data={ this.props.errors } />
        <FhirVisualizers.PatientVisualizer patient={this.props.patient} />
        <ObjectInspector data={ this.props.patient } />
        <FhirVisualizers.EncountersVisualizer rows={this.props.encounters} />
        <ObjectInspector data={ this.props.encounters } />
        <FhirVisualizers.ConditionsVisualizer rows={this.props.conditions} />
        <ObjectInspector data={ this.props.conditions } />
        <FhirVisualizers.ImmunizationsVisualizer rows={this.props.immunizations} />
        <ObjectInspector data={ this.props.immunizations } />
      </div>
    );
  }
}

module.exports = Fhir
