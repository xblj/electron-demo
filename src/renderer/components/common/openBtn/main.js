import { app } from 'electron'
export default function (win,outapp) {
    app.on('ready', () => {
        // win()
        console.log(app===outapp)
    });

}