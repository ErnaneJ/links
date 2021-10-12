<script>
	import Particles from './components/Particles.svelte'
	import Container from './components/Container.svelte'
	import Profile from './components/Profile.svelte'
	import Info from './components/Info.svelte'
	import Footer from './components/Footer.svelte'

	export let name;
</script>

<Particles></Particles>
<Container>
	<Profile></Profile>
	<Info></Info>
	<Footer {name}></Footer>
</Container>