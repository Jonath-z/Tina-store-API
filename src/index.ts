import { App, app, PORT } from "./app";
import { initializeDB } from "./database/initializeDB";

(async() => {
    App();
    app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
    await initializeDB();
})();