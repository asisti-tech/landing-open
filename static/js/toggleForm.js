document.addEventListener("DOMContentLoaded", function () {
    const formsContainer = document.querySelector(".form-container");
    const organizationForm = document.getElementById("form-organization");
    const patientForm = document.getElementById("form-patient");
    const orgButton = document.querySelector(".organization-form-btn");
    const patientButton = document.querySelector(".patient-form-btn");
    const startPatientButton = document.querySelector(".start__btn_patient");
    const startOrgButton = document.querySelector(".start__btn_org");

    formsContainer.replaceChild(organizationForm, formsContainer.firstElementChild);

    function showOrganizationForm() {
        formsContainer.replaceChild(organizationForm, formsContainer.firstElementChild);
    }

    function showPatientForm() {
        formsContainer.replaceChild(patientForm, formsContainer.firstElementChild);
    }

    orgButton.addEventListener("click", showOrganizationForm);
    patientButton.addEventListener("click", showPatientForm);
    startOrgButton.addEventListener("click", showOrganizationForm);
    startPatientButton.addEventListener("click", showPatientForm);
});