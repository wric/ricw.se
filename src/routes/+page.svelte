<script>
	let mailto = '#';

	function createMailto() {
		if (mailto !== '#') return;
		const hash = 'd2VzdGJlcmcucmljaGFyZEBnbWFpbC5jb20=';
		const email = window.atob(hash);
		mailto = `mailto:${email}`;
	}
</script>

<h1>Hello</h1>

<p>
	My name is Richard this is my personal website. I am a 30-something guy living in Gothenburg,
	Sweden, with an interest in technology and design. This is where I plan to dump my creations and
	maybe write a few words about it.
</p>

<p>
	I am a MSc in Mechanical Engineering and I currectly work as a sofware engineer at an European CRM
	supplier. I mainly code my projects in Python and JS/Node but I do not hold strong opinions about
	languages — I use what is convenient and solves the problem.
</p>

<h3>Contact</h3>
<p>Want more? Look at some code or send me an email:</p>

<ul>
	<li>
		<a href="https://github.com/wric">Github</a>
	</li>
	<li>
		<a href={mailto} on:mouseenter={createMailto}>Email</a>
	</li>
</ul>
