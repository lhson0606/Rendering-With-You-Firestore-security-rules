const assert = require('assert');
const firebase = require('@firebase/testing');

const PROJECT_ID = "verdant-ethos-388000";

describe("Rendering With You", ()=>{
    it("Understand basic addition", ()=>{
        assert.equal(1+1, 2);
    })

    it("Cannot read items in the users collection", async ()=>{
        const db = firebase.initializeTestApp({projectId: PROJECT_ID}).firestore();
        const testDoc = db.collection("users").doc("xPl6Jj3mXjfQaJkAlv2os8wv9233");
        await firebase.assertFails(testDoc.get());
    })

    it("Cannot write to system collection (skin)", async ()=>{
        const db = firebase.initializeTestApp({projectId: PROJECT_ID}).firestore();
        const testDoc = db.collection("system").doc("skin");
        await firebase.assertFails(testDoc.set({foo: "bar"}));
    })

    it("Cannot write to system collection (season)", async ()=>{
        const db = firebase.initializeTestApp({projectId: PROJECT_ID}).firestore();
        const testDoc = db.collection("system").doc("season");
        await firebase.assertFails(testDoc.set({foo: "bar"}));
    })

    it("Cannot write to system collection (rank)", async ()=>{
        const db = firebase.initializeTestApp({projectId: PROJECT_ID}).firestore();
        const testDoc = db.collection("system").doc("rank");
        await firebase.assertFails(testDoc.set({foo: "bar"}));
    })
})