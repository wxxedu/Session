import open from "open";

export class Session {
    // constructor 
    constructor() {}
    
    // declare a private constant called url
    private static url: string = "session:///";

    // declare a private variable called intent
    private intent: string = "";
    // declare a public method called setIntent
    public setIntent(intent: string): void {
        this.intent = intent;
    }
    // declare a public method called getIntent
    public getIntent(): string {
        return this.intent;
    }

    // declare a private variable called duration that defaults to 25
    private duration: number = 25;
    // declare a public method called setDuration
    public setDuration(duration: number): void {
        this.duration = duration;
    }
    // declare a public method called getDuration
    public getDuration(): number {
        return this.duration;
    }

    // declare a private variable called categoryId
    private categoryId: string = "";
    // declare a public method called setCategoryId
    public setCategoryId(categoryId: string): void {
        this.categoryId = categoryId;
    }
    // declare a public method called getCategoryId
    public getCategoryId(): string {
        return this.categoryId;
    }

    // declare a private variable called categoryName
    private categoryName: string = "";
    // declare a public method called setCategoryName
    public setCategoryName(categoryName: string): void {
        this.categoryName = categoryName;
    }
    // declare a public method called getCategoryName
    public getCategoryName(): string {
        return this.categoryName;
    }

    // declare a public method called start
    public start(): void {
        let startUrl: string = Session.url + "start";
        let startParams: string = ""
        // if the intent is not empty
        if (this.intent !== "") {
            // add the intent to the start params
            startParams += "?intent=" + this.intent;
        }
        // if the duration is not empty
        if (this.duration !== 0) {
            // add the duration to the start params
            startParams += "&duration=" + this.duration;
        }
        // if the categoryId is not empty
        if (this.categoryId !== "") {
            // add the categoryId to the start params
            startParams += "&categoryId=" + this.categoryId;
        }
        // if the categoryName is not empty
        if (this.categoryName !== "") {
            // add the categoryName to the start params
            startParams += "&categoryName=" + this.categoryName;
        }
        // open the start url with the start params
        let startUrlWithParams: string = startUrl + startParams;
        open(startUrlWithParams);
    }
    // declare a public method called startPrevious
    public startPrevious(): void {
        let startPreviousUrl: string = Session.url + "start-previous";
        open(startPreviousUrl);
    }

    // declare a public method called pause
    public pause(): void {
        let pauseUrl: string = Session.url + "pause";
        open(pauseUrl);
    }

    // declare a public method called finish
    public finish(): void {
        let finishUrl: string = Session.url + "finish";
        open(finishUrl);
    }

    // declare a public method called abandon
    public abandon(): void {
        let abandonUrl: string = Session.url + "abandon";
        open(abandonUrl);
    }

    // declare a static method called with that takes optional parameters
    public static with(intent?: string, duration?: number, categoryId?: string, categoryName?: string): Session {
        let session: Session = new Session();
        if (intent !== undefined) {
            session.setIntent(intent);
        }
        if (duration !== undefined) {
            session.setDuration(duration);
        }
        if (categoryId !== undefined) {
            session.setCategoryId(categoryId);
        }
        if (categoryName !== undefined) {
            session.setCategoryName(categoryName);
        }
        return session;
    }
}