/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name": "Agilizei Karine",
                "avatar": "https://pickaface.net/gallery/avatar/unr_anakahfakesmith_181119_2202_v01a4.png",
                "whatsapp": "51999887766",
                "bio": "Lorem Ipsum, Lorem Ipsum",
                "subject": "Matemática",
                "cost": 100,
                "schedule": [
                    {
                        "week_day": 0,
                        "from": "08:00",
                        "to": "09:00"
                    }
                ]
            }
        }).then((response) => {
            expect(response.status).to.be.equal(201)
          
            expect(response.body[0])
                .to.have.property('class_id')
                .to.be.a('number')

            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')
        })
    });
});
