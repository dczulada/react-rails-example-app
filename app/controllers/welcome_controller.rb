class WelcomeController < ApplicationController
  def index
  	entry = Rails.root.join('tmp', 'patient-bundle.json')
  	@source_patient = JSON.parse(File.read(entry), max_nesting: 100)
  	@patient_resource = @source_patient['entry'].find { |e| e['resource']['resourceType'] == 'Patient' }['resource']
    bundle = FHIR::Bundle.new(@source_patient)
  	allResources = @source_patient['entry'].map { |e| e['resource'] }
  	@conditions = allResources.select { |e| e['resourceType'] == 'Condition' }
  	@encounters = allResources.select { |e| e['resourceType'] == 'Encounter' }
  	@immunizations = allResources.select { |e| e['resourceType'] == 'Immunization' }
  	@single = @immunizations.first['resource']
    @errors = bundle.validate
  end
end
