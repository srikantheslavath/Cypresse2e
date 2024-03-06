describe('GraphQL API Testing', () => {
  it('should return a hello message with variables', () => {
    // Load GraphQL query from fixture file
    cy.fixture('GetFunction.graphql').then((graphqlQuery) => {
      // Load variables from fixture file
      cy.fixture('GetFunction.json').then((variables) => {
        // Send GraphQL query with variables
        cy.request({
          method: 'POST',
          url: 'https://dev-sb-api.advantage-eclinical.com/studyBuilder',
          headers: {
            'Authorization': 'eyJraWQiOiJJTjhraElkamVvQjhUR1NrMnk1UWhtNE5SWkJNLWpLLWhOWWpsVzNqa19BIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULktOYWVUVnBHbWhmMkZGanZLckxQbmU0UHNXSzlON253R0hSalVlT250MDQub2FyMjE5eXc5dHk0Rnhub0YyOTciLCJpc3MiOiJodHRwczovL2VtbWVzLm9rdGEuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTcwNzQ1NDY4NCwiZXhwIjoxNzA3NDU4Mjg0LCJjaWQiOiIwb2EydTkxbnY2a0ROaXdLdTI5NyIsInVpZCI6IjAwdWt4ZGpsN2drck9MVVJUMjk3Iiwic2NwIjpbIm9mZmxpbmVfYWNjZXNzIiwicHJvZmlsZSIsImVtYWlsIiwib3BlbmlkIl0sImF1dGhfdGltZSI6MTcwNzQ1NDU5NSwic3ViIjoiZS5zcmlrYW50aEBlbW1lcy5jb20ifQ.e_fxGA9YG-s0YB7ShYDarJVdYazwOR6osceJZxblqc3zOereie-980Xcg2Cz2UH7ck7XYqLbk4xO0czFiqyAHm7gAweVxC4TI6ZDY8aQCop3etY2Y3KpWJKoyz9wo-qGfEGVbS-85fR3Gxb15SPOPfgW8yO2mYDEfavsBZgQEjSn8oo0nPDY-D6Meovsj8dgVkvp-Z7G1Cvk_k5FyrVtGPhjNvisomoGzW5ieVSmsxFmsb0a3wrfuTtuYpEhuezHUm15tD4E7QPBLI8kYd3G_rUy_9RjTQmMYQ8mjjohTWtLOv6x2LP86k3OAMpFpic-b0C7-5z5soYGr2azaK3Rxg'
          },
          body: {
            query: graphqlQuery,
            variables: variables
          }
        }).then(response => {
          // Assert on the response
          expect(response.status).to.eq(200); // Ensure the status code is 200
          // Add more assertions as per your response
        });
      });
    });
  });
});
