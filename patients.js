 const patientOne = {
    "resourceType": "Patient",
    "id": "patient-john-smith",
    "name": [
      {
        "use": "official",
        "family": "Smith",
        "given": ["John", "A."]
      }
    ],
    "gender": "male",
    "birthDate": "1985-05-15",
    "address": [
      {
        "use": "home",
        "line": ["123 Main St"],
        "city": "Metropolis",
        "state": "NY",
        "postalCode": "10101",
        "country": "USA"
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "555-1234",
        "use": "home"
      }
    ]
  }
 const patientTwo = {
    "resourceType": "Patient",
    "id": "patient-maria-gonzalez",
    "name": [
      {
        "use": "official",
        "family": "Gonzalez",
        "given": ["Maria", "C."]
      }
    ],
    "gender": "female",
    "birthDate": "1992-03-22",
    "address": [
      {
        "use": "home",
        "line": ["456 Elm Street"],
        "city": "Springfield",
        "state": "CA",
        "postalCode": "90210",
        "country": "USA"
      }
    ],
    "telecom": [
      {
        "system": "email",
        "value": "maria.gonzalez@example.com",
        "use": "home"
      }
    ]
  }
  
 const patientThree = {
    "resourceType": "Patient",
    "id": "patient-ravi-kumar",
    "name": [
      {
        "use": "official",
        "family": "Kumar",
        "given": ["Ravi"]
      }
    ],
    "gender": "male",
    "birthDate": "1978-07-10",
    "address": [
      {
        "use": "work",
        "line": ["789 Oak Lane"],
        "city": "Chennai",
        "state": "TN",
        "postalCode": "600001",
        "country": "India"
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "+91-9876543210",
        "use": "mobile"
      }
    ],
    "maritalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
          "code": "M",
          "display": "Married"
        }
      ]
    }
  }

module.exports = {
patientOne,
patientTwo,
patientThree
};