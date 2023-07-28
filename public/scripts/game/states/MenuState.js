import State from "../../core/State/State.js";
import BackButton from "../buttons/BackButton.js";

/** Example of Gamestate
 *
 *  1. Renders a background
 *  2. Takes poseLandmarks and renders a skeleton
 *  3. Loads relevant game items (charge pack, etc.)
 *  4. Goes through 4 poses
 *  5. Transition to game over
 *
 * Alt: Game over on empty charge pack for 5 seconds
 */

export default class MenuState extends State {
	backButton = {};

	constructor() {
		super("Menu");
		
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
	}

	update() {
		super.update();

        //UI
        this.backButton.render();

        this.backButton.resize(
			this.gameSession.canvasWidth * .05,
			this.gameSession.canvasHeight * .05,
			this.gameSession.canvasWidth * .05,
			this.gameSession.canvasWidth * .05
		);
	}

    mousePressed(){
		this.backButton.checkPressed();
	}

	mouseReleased(){
		this.backButton.checkReleased();
	}
	

	cleanup() {
		super.update();
	}

}
