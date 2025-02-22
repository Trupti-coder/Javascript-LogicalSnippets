function generateRandomString(length){

    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';

    for (var i = 0; i < length; i++){
                // Generate a random index between 0 and the length of the characters string
                var randomIndex = Math.floor(Math.random() * characters.length);
                // Append the character at the random index to the randomString
                randomString += characters[randomIndex];

    }
    return randomString;
}