<script>
        document.getElementById('getData').addEventListener('click', getData);
        document.getElementById('getAPI').addEventListener('click', getAPI);


        function getData(){
            //getData function

    //Using javascript ES5 function 

    fetch('sampleUser.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let result = `<h2> User Info From sampleUser.json </h2>`;
        data.forEach((user) => {
            const { id, name, email } = user
            result +=
        `   <div>
                <h5> User ID: ${id} </h5>
                <ul class="w3-ul">
                    <li> User Name : ${name}</li>
                    <li> User Email: ${email} </li>
                </ul>
            </div>`;

            document.getElementById('result').innerHTML = result;
     });
   })

        }

        function getAPI(){
            // code to execte
        }

</script> 
