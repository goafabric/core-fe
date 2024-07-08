import * as properties from "../../properties.js";

document.addEventListener("DOMContentLoaded", function() {
    fetch(properties.coreServiceUrl + '/users/getUserInfo')
        .then(response => response.json())
        .then(data => {
            const userInfo = document.getElementById('user-info');
            userInfo.innerHTML = `Welcome ${data.userName} for tenant ${data.tenantId}`;
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });
});
