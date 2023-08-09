import State from "../../core/State/State.js";
import Button from "../../core/UI/Button.js";
import BackButton from "../buttons/BackButton.js";

export default class AboutState extends State {
    backButton = {};


    constructor() {
        super("About");
    }

    setup() {
        super.setup();

        //Instantiate backbutton
        let backButtonLayout = {
            x: this.gameSession.canvasWidth * .05,
            y: this.gameSession.canvasHeight * .05,
            width: this.gameSession.canvasWidth * .05,
            height: this.gameSession.canvasWidth * .05
        }

        let backButtonStyle = {
            stroke: this.p5.color(255, 255, 255),
            strokeWeight: 5,
            fill: this.p5.color(0, 0, 0),
            hoverFill: this.p5.color(123, 123, 123),
            pressedFill: this.p5.color(255, 255, 255),
            loadingFill: this.p5.color(62, 62, 62),
            disabledFill: this.p5.color(125, 0, 0),
        }

        this.backButton = new BackButton(backButtonLayout, backButtonStyle, false, "Loading");
        this.backButton.setup();
    }

    render() {
        super.render();

        //UI
        this.backButton.render();
        this.howButton.render();
        this.resourceButton.render();
        this.historyButton.render();
        this.creditButton.render();
    }

    resize() {
        super.resize();

        this.backButton.resize(
            this.gameSession.canvasWidth * .05,
            this.gameSession.canvasHeight * .05,
            this.gameSession.canvasWidth * .05,
            this.gameSession.canvasWidth * .05
        );

        this.howButton.updateSize();
        this.resourceButton.updateSize();
        this.historyButton.updateSize();
        this.creditButton.updateSize();
    }

    update() {
        super.update();

        //UI
        this.backButton.update();

        this.howButton.update();
        this.resourceButton.update();
        this.historyButton.update();
        this.creditButton.update();
    }

    mousePressed(){
        this.backButton.checkPressed(/*this.gameSession.setCurrentStateByName("Loading")*/);
        this.howButton.checkPressed(/*this.gameSession.setCurrentStateByName("Loading")*/);
        this.resourceButton.checkPressed(/*this.gameSession.setCurrentStateByName("Loading")*/);
        this.historyButton.checkPressed(/*this.gameSession.setCurrentStateByName("Loading")*/);
        this.creditButton.checkPressed(/*this.gameSession.setCurrentStateByName("Loading")*/);
    }

    mouseReleased(){
        this.backButton.checkReleased();

        this.howButton.checkReleased(() => {
            this.gameSession.setCurrentStateByName("Info");
            //this.gameSession.currentState.text = "How This Game Works";
            this.gameSession.currentState.text = "How This Game Works\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec enim sapien.\n Aliquam tincidunt enim vel magna ullamcorper, at faucibus lorem ullamcorper.\n Vestibulum semper nisl vitae est congue, eget posuere erat malesuada.\n Nam volutpat mollis nunc, in ultrices orci lacinia nec. Fusce dictum nunc in nulla\n blandit, ac euismod lectus blandit. Sed consequat lacus ut nulla interdum, sed\n sodales purus pellentesque. Fusce maximus justo eu est ultrices laoreet.\n Curabitur a lobortis sem. Maccenas viverra porttitor leo. Class aptent taciti sociosqu \nad litora torquent per conubia nostra, per inceptos himenaeos.";

            // TODO: run into an error: 
            //       Uncaught ReferenceError: require is not defined
            /*
            // Read the display content from a file.
            require('fs').readFile('HowThisGameWorks.txt', function(err, content) {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log("\n[\n" + content.toString() + "\n]\n");
                }
            });
            */
        });

        this.resourceButton.checkReleased(() => {
            this.gameSession.setCurrentStateByName("Info");
            //this.gameSession.currentState.text = "Information about\n" + "Additional TSY Resources";
            this.gameSession.currentState.text = "Additional TSY Resources\n" + 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec enim sapien.\n Aliquam tincidunt enim vel magna ullamcorper, at faucibus lorem ullamcorper.\n Vestibulum semper nisl vitae est congue, eget posuere erat malesuada.\n Nam volutpat mollis nunc, in ultrices orci lacinia nec. Fusce dictum nunc in nulla\n blandit, ac euismod lectus blandit. Sed consequat lacus ut nulla interdum, sed\n sodales purus pellentesque. Fusce maximus justo eu est ultrices laoreet.\n Curabitur a lobortis sem. Maccenas viverra porttitor leo. Class aptent taciti sociosqu \nad litora torquent per conubia nostra, per inceptos himenaeos.";
        });

        this.historyButton.checkReleased(() => {
            this.gameSession.setCurrentStateByName("Info");
            //this.gameSession.currentState.text = "Information about\n" + "Yoga Culture & History";
            this.gameSession.currentState.text = "Yoga Culture & History\n" + 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec enim sapien.\n Aliquam tincidunt enim vel magna ullamcorper, at faucibus lorem ullamcorper.\n Vestibulum semper nisl vitae est congue, eget posuere erat malesuada.\n Nam volutpat mollis nunc, in ultrices orci lacinia nec. Fusce dictum nunc in nulla\n blandit, ac euismod lectus blandit. Sed consequat lacus ut nulla interdum, sed\n sodales purus pellentesque. Fusce maximus justo eu est ultrices laoreet.\n Curabitur a lobortis sem. Maccenas viverra porttitor leo. Class aptent taciti sociosqu \nad litora torquent per conubia nostra, per inceptos himenaeos.";
        });

        this.creditButton.checkReleased(() => {
            this.gameSession.setCurrentStateByName("Info");
            this.gameSession.currentState.text = "Academic Development Credits\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec enim sapien.\n Aliquam tincidunt enim vel magna ullamcorper, at faucibus lorem ullamcorper.\n Vestibulum semper nisl vitae est congue, eget posuere erat malesuada.\n Nam volutpat mollis nunc, in ultrices orci lacinia nec. Fusce dictum nunc in nulla\n blandit, ac euismod lectus blandit. Sed consequat lacus ut nulla interdum, sed\n sodales purus pellentesque. Fusce maximus justo eu est ultrices laoreet.\n Curabitur a lobortis sem. Maccenas viverra porttitor leo. Class aptent taciti sociosqu \nad litora torquent per conubia nostra, per inceptos himenaeos.";
        });
    }
    

    cleanup() {
        super.update();
    }

	/**UI Components
	 *
	 */

    /*
     * How this game works button
     */
	howButtonLayout = {
		//xRatio: 0.05,
		xRatio: 0.05,
		yRatio: 0.55,
		widthRatio: 0.4,
		heightRatio: 0.175,
	};

	// "null" as fill means the button will not be rendered
	howButtonStyle = {
		stroke: this.p5.color(230, 251, 255),
		strokeWeight: 5,
		fill: this.p5.color(51, 51, 51),
		hoverFill: this.p5.color(76, 76, 76),
		pressedFill: this.p5.color(102, 102, 102),
		loadingFill: this.p5.color(0, 128, 255),
		disabledFill: null,
	};

	howButtonText = {
		text: "How This Game Works",
		textRatio: 14,
	};

	howButton = new Button(this.howButtonLayout, this.howButtonStyle, this.howButtonText);

    /*
     * Additional TSY Resources button
     */
	resourceButtonLayout = {
		xRatio: 0.5,
		yRatio: 0.55,
		widthRatio: 0.4,
		heightRatio: 0.175,
	};

	resourceButtonStyle = {
		stroke: this.p5.color(230, 251, 255),
		strokeWeight: 5,
		fill: this.p5.color(51, 51, 51),
		hoverFill: this.p5.color(76, 76, 76),
		pressedFill: this.p5.color(102, 102, 102),
	};

	resourceButtonText = {
		text: "Additional TSY Resources",
		textRatio: 14,
	};

	resourceButton = new Button(this.resourceButtonLayout, this.resourceButtonStyle, this.resourceButtonText);

    /*
     * Yoga Culture & History button
     */
	historyButtonLayout = {
		xRatio: 0.05,
		yRatio: 0.775,
		widthRatio: 0.4,
		heightRatio: 0.175,
	};

	historyButtonStyle = {
		stroke: this.p5.color(230, 251, 255),
		strokeWeight: 5,
		fill: this.p5.color(51, 51, 51),
		hoverFill: this.p5.color(76, 76, 76),
		pressedFill: this.p5.color(102, 102, 102),
		disabledFill: null,
	};

	historyButtonText = {
		text: "Yoga Culture & History",
		textRatio: 14,
	};

	historyButton = new Button(this.historyButtonLayout, this.historyButtonStyle, this.historyButtonText);

    /*
     * Academic Development Credits button
     */
	creditButtonLayout = {
		xRatio: 0.5,
		yRatio: 0.775,
		widthRatio: 0.4,
		heightRatio: 0.175,
	};

	creditButtonStyle = {
		stroke: this.p5.color(230, 251, 255),
		strokeWeight: 5,
		fill: this.p5.color(51, 51, 51),
		hoverFill: this.p5.color(76, 76, 76),
		pressedFill: this.p5.color(102, 102, 102),
		disabledFill: null,
	};

	creditButtonText = {
		text: "Academic Development Credits",
		textRatio: 14,
	};

	creditButton = new Button(this.creditButtonLayout, this.creditButtonStyle, this.creditButtonText);
}
