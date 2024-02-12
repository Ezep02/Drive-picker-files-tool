
## Getting Started

For run thise project, you will need a DRIVE API KEY and a GOOGLE OAUTH API KEY !important.

# 1. First activate GOOGLE DRIVE services from google cloud apis:
    .https://console.cloud.google.com/apis/library/drive.googleapis.com?project=daring-charmer-412915

# 2. After active GOOGLE DRIVE SERVICES, you must create a new API KEY from google cloud credentials:  
    .https://console.cloud.google.com/apis/credentials?project=daring-charmer-412915

# 3. as the previos step, you must create a Oauth client id: 
    https://console.cloud.google.com/apis/credentials/oauthclient?previousPage=%2Fapis%2Fcredentials%3Fproject%3Ddaring-charmer-412915&project=daring-charmer-412915

    #How to do this: https://www.youtube.com/watch?v=OKMgyF5ezFs

# 4. Finally create a .env.local and add two properties, 1 for the api key service, and other one for the client Oauth id:  

    #when create your google Oauth client, you will recive a client ID

    NEXT_PUBLIC_CLIENT_ID = #GOOGLE CLIENT ID HERE
    NEXT_PUBLIC_API_KEY = #GOOGLE DRIVE API KEY HERE

    # Use those names in the .env.local file or change the default values in picker/page 


How to run the project:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


