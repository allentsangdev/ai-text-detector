const axios = require('axios');
//const writerApiKey = process.env.WRITER_API_KEY
//const organizationId = process.env.WRITER_ORG_ID
//const teamId = process.env.WRITER_TEAM_ID
const writerApiKey = '59j1lbS_0Iehk3Z84KMzu1qHAGJi022wRKYa999AAdCXASw5X1aWJkXzmIbqrWBKBKuWfLG1OnPVXPrvUYEu8DdycubJuNyZeTYmdriKb1O8rypWgpfIeHyhkg27v8Va'
const organizationId = '568358'
const teamId = '575153'
const content = 'this is a testing content'


const writer_content_detect = (writerApiKey, organizationId, content) => {

    const options = {
      method: 'POST',
      url: `https://enterprise-api.writer.com/content/organization/${organizationId}/detect`,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${writerApiKey}`,
        'content-type': 'application/json'
      },
      data: {input: content}
    };
    
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error.message);
      });

}

module.exports = {
    writer_content_detect
}

writer_content_detect(writerApiKey, organizationId, teamId, content)