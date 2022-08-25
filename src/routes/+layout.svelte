<header>
	<h1>Ricw.se</h1>
	<nav>
		<a href="/">Home</a>
		<a href="/writing">Writing</a>
		<a href="/projects">Projects</a>
		<a href="/startpage">Startpage</a>
	</nav>
</header>

<main>
	<slot />
</main>

<style lang="scss">
	:global {
		*,
		*:before,
		*:after {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			max-width: 100%;
		}

		body {
			--color-dark: #141414;
			--color-light: #fefefe;
			--color-accent: #ffe600;
			padding: 2rem;
			margin: 0;

			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
			color: var(--color-dark);
			background-color: var(--color-light);
			transition: background-color 0.2s;
		}

		h1,
		h2,
		h3,
		h4 {
			margin: 0 0;
		}

		@media (prefers-color-scheme: dark) {
			body {
				color: var(--color-light);
				background-color: var(--color-dark);
			}
		}

		a {
			color: inherit;
			text-decoration: none;
			border-bottom: 0.25rem solid rgba(0, 0, 0, 0);

			&:hover {
				border-bottom-color: var(--color-accent);
			}
		}

		li::marker {
			content: '. ';
			font-size: 1.2em;
		}
	}

	h1 {
		font-size: 1.15rem;
		letter-spacing: 0.1rem;
		text-transform: uppercase;
	}

	main {
		max-width: 40rem;
		margin-top: 3rem;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		column-gap: 1rem;
	}
</style>
