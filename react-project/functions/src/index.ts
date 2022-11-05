import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

export const proc = functions.https.onRequest((request, response) => {
    (async () => {
        try {
            const { name, body } = request.body;
            if (name && body) {
                const date = new Date().toISOString();
                await admin
                    .database()
                    .ref("/bbs")
                    .push({ name, body, created_at: date, update_at: date });
            }
        } catch { }
    })();

    admin
        .database()
        .ref("/bbs")
        .orderByChild("created_at")
        .on("value", data => {
            const values = data!.val();
            const result = Object.entries(values).map(([key, value]) => ({
                value,
                id: key
            }));
            response.status(200).send(result);
        });
});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
