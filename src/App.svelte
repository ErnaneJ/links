<script>
	import Particles from './components/Particles.svelte';
	import Container from './components/Container.svelte';
	import Profile from './components/Profile.svelte';
	import Info from './components/Info.svelte';

	setTimeout(() => document.querySelector('body').classList.remove("ovf-h"), 1800);
</script>

<Particles></Particles>
<Container>
	<Profile></Profile>
	<Info/>
</Container>