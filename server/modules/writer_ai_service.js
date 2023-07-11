const axios = require('axios');
const writerApiKey = process.env.WRITER_API_KEY
const organizationId = process.env.WRITER_ORG_ID
const teamId = process.env.WRITER_TEAM_ID

const writer_content_detect = () => {

    const options = {
        method: 'POST',
        url: `https://enterprise-api.writer.com/content/organization/${organizationId}/team/${teamId}/check`,
        headers: {
          accept: 'application/json',
          authorization: {writerApiKey},
          'content-type': 'application/json'
        },
        data: {
          settings: {
            passiveVoice: true,
            wordiness: true,
            unclearReference: true,
            genderInclusivePronouns: true,
            genderInclusiveNouns: true,
            ageAndFamilyStatus: true,
            disability: true,
            genderIdentitySensitivity: true,
            raceEthnicityNationalitySensitivity: true,
            sexualOrientationSensitivity: true,
            substanceUseSensitivity: true,
            confidence: true,
            healthyCommunication: true,
            grammar: true,
            spelling: true,
            contentSafeguards: true
          }
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });


}

module.exports = {
    writer_content_detect
}