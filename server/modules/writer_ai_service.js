const axios = require('axios');
//const writerApiKey = process.env.WRITER_API_KEY
//const organizationId = process.env.WRITER_ORG_ID
//const teamId = process.env.WRITER_TEAM_ID

const writer_content_detect = async (writerApiKey, organizationId, content) => {

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
    
    const result = await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data
      })
      .catch(function (error) {
        console.error(error.message);
        return error.message
      });
    
    return result

}

module.exports = {
    writer_content_detect
}

//writer_content_detect(writerApiKey, organizationId, teamId, content)