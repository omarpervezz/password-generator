var password = document.getElementById("password");
const genPasswrod = document.querySelector('.btn-success');
const copyPassword = document.querySelector('.btn-info')

genPasswrod.onclick = () => {
    var chars = `sljfsjdfoeruu74723942%jb@((93745m,.ja.//[]]''/?<L636jjlj863;sjdfj5237497hkvbl4'"!(|&%#1bvpiii486))`;
    var passwordLength = 19;
    var password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomIndex, randomIndex + 1);
    }
    document.getElementById("password").value = password;

}

copyPassword.onclick = () => {
    var copyText = document.getElementById("password");

    copyText.select();
    document.execCommand("copy");
}