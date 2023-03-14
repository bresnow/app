// import JOY from "../../esm/joy.mjs";
JOY.css({
	"#meta": {
		display: "block",
		position: "fixed",
		bottom: "1em",
		"font-size": "16pt",
		// background: "var(--surface)",
		/*border: 0.1em solid var(--text),*/
		color: "var(--text)",
		"text-align": "center",
		"z-index": 999999,
		"-webkit-tap-highlight-color": "transparent",
		right: "1em",
		margin: 0,
		"border-radius": "var(--radius)",
		width: "2.4em",
		outline: "none",
		cursor: "pointer",
		overflow: "none",
		transition: "all 0.2s",
	},
	"#meta *": {
		outline: "none",
	},
	"#meta .meta-none": {
		display: "none",
	},
	"#meta span": {
		"line-height": "2em",
	},
	"#meta .meta-menu": {
		background: "var(--surface)",
		// background: "rgba(var(--background), 0.5)",
		// border: "0.1em solid var(--text)",
		"backdrop-filter": "blur(5px)",
		// "-webkit-backdrop-filter": "blur(5px)",
		"border-radius": "var(--radius)",
		"animation-name": "animateOut",
		"animation-duration": "210ms",
		right: 0,
		bottom: "2.5em",
		overflow: "none",
		position: "absolute",
		"text-align": "right",
	},
	"#meta .meta-menu ul": {
		"list-style-type": "none",
		display: "flex",
		"flex-direction": "column",
	},
	"#meta .meta-menu ul li": {
		color: "var(--text)",
		display: "inline-block",
		float: "right",
		padding: "0.5em 1em",
		"font-size": "14pt",
		"border-radius": "0.75em",
		"text-align": "center",
		"animation-name": "animateIn",
		"animation-duration": "210ms",
		"animation-delay": "calc(var(--meta-key) * 70ms)",
		"animation-fill-mode": "both",
		"animation-timing-function": "ease-in-out",
		cursor: "pointer",
	},
	"#meta .meta-menu ul li:focus": {
		background: "var(--primary)",
	},
	"#meta a": {
		color: "var(--text)",
	},
	"#meta:hover": {
		opacity: 1,
	},
	"#meta:hover .meta-menu": {
		display: "block",
	},
	"#meta .meta-menu ul:before": {
		content: " ",
		display: "block",
	},
	"#meta .meta-start": {
		cursor: "pointer",
	},
});

// Mobile menu
JOY.css(
	{
		"#meta": {
			display: "block",
			position: "fixed",
			bottom: "0em",
			"font-size": "16pt",
			transition: "bottom 0.5s",
			/*background: "var(--surface)",*/

			color: "var(--text)",
			"text-align": "center",
			"z-index": 999999,
			"-webkit-tap-highlight-color": "transparent",

			margin: "1em auto",

			width: "2.5em",
			outline: "none",
			cursor: "pointer",
			overflow: "none",
		},
		"#meta .meta-menu": {
			"border-radius": "var(--radius)",
			//"box-shadow": "0 0.25em 0.5em var(--secondary)",
			background: "var(--surface)",
			//background: "rgba(var(--primary), 0.8)",
			/*
		"border-radius": "var(--radius)",
		"backdrop-filter: "blur(5px)",
		"-webkit-backdrop-filter": "blur(5px),*/
			//animation: "none",
			//"animation-delay": "0ms"
			position: "absolute",
			padding: "0.25em",
		},
		"#meta .meta-none": {
			display: "none",
		},

		"#meta .meta-menu ul": {
			padding: 0,
			margin: 0,
			"white-space": "nowrap",
			display: "flex",
			"justify-content": "space-around",
			"flex-wrap": "wrap",
			"flex-direction": "row",
			//"overflow-yrow-revese"
			//"overflow-x": "auto",
		},
		"#meta .meta-menu ul li": {
			"-webkit-user-select": "none",
			"-moz-user-select": "none",
			"-ms-user-select": "none",
			"user-select": "none",
			display: "inline",
			padding: "0.25em 0.5em",

			"font-size": "14pt",
			"border-radius": "var(--radius)",
			"text-align": "right",
			cursor: "pointer",
		},
		"#meta a": {
			color: "var(--text)",
		},
		"#meta:hover": {
			opacity: 1,
		},

		"#meta:hover .meta-menu": {
			display: "block",
		},
		"#meta .meta-menu ul:before": {
			content: " ",
			display: "block",
		},
		"#meta .meta-start": {
			cursor: "pointer",
		},
	},
	"only screen and (max-width: 600px)"
);
JOY.css({
	"#place": {
		width: "100%",
		"-webkit-user-select": "none",
		"-moz-user-select": "none",
		"-ms-user-select": "none",
		"user-select": "none",
		"text-overflow": "ellipsis",
	},
});


JOY.css(
	{
		".screen": {
			margin: "auto",
			"padding-left": "4em",
		},
	},
	"only screen and (min-width: 600px)"
);
JOY.css(
	{
		header: {
			margin: "auto",
			"padding-left": "3em",
		},
	},
	"only screen and (min-width: 600px)"
);
JOY.css({
	".screen": {
		"padding-bottom": "7em",
	},
});

JOY.css({
	".flex": {
		display: "flex",
		"justify-content": "space-between",
		"flex-wrap": "wrap",
	},
});
JOY.css({
	".icon-cover": {
		height: "5em",
		width: "5em",
		"object-fit": "cover",
		color: "var(--text)",
	},
});
JOY.css({
	".cover": {
		height: "calc(30vh + 10em)",
		width: "100%",
		"object-fit": "cover",
	},
	".inline-icon": {
		height: "1.2em",
		width: "1.2em",
		"vertical-align": "sub",
	},
	"#header-icon": {
		top: "-0.5em",
		left: "0.5em",
		"line-height": "1.1",
		"font-size": "5em",
	},
});
