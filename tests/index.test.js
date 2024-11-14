const request = require("supertest"); // For HTTP assertions
const app = require("../main"); // Assuming your server is exported from this file
const patients = require("../patients");
var server
beforeAll(() => {
    // Start the server before tests
    server = app.listen(4000); // Or use the port your app listens on
});

afterAll(async () => {
    // Close the server to stop async operations
    await server.close();
});

describe("GET /patients", () => {
    
  it("should return patientJohnSmith when 'auth' header is 'patientOne'", async () => {
    const response = await request(server)
      .get("/get-patient")
      .set("auth", "patientOne"); // Set the 'auth' header to 'patientOne'

    expect(response.status).toBe(200); // Expect a 200 status code
    expect(response.body).toEqual(patients.patientOne); // Expect the correct patient resource
  });


  it("should return patientMariaGonzalez when 'auth' header is 'patientTwo'", async () => {
    const response = await request(server)
      .get("/get-patient")
      .set("auth", "patientTwo"); // Set the 'auth' header to 'patientTwo'

    expect(response.status).toBe(200); // Expect a 200 status code
    expect(response.body).toEqual(patients.patientTwo); // Expect the correct patient resource
  });



  it("should return patientRaviKumar when 'auth' header is 'patientThree'", async () => {
    const response = await request(server)
      .get("/get-patient")
      .set("auth", "patientThree"); // Set the 'auth' header to 'patientThree'

    expect(response.status).toBe(200); // Expect a 200 status code
    expect(response.body).toEqual(patients.patientThree); // Expect the correct patient resource
  });


  it("should return 401 when 'auth' header is missing or invalid", async () => {
    const response = await request(server)
      .get("/get-patient");

    expect(response.status).toBe(400);
  });


});