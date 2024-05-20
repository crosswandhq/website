<script lang="ts">
	import { applications } from '$lib/data/data';
	import LegalPage from '../../templates/legal_page.svelte';
</script>

<LegalPage heading="Privacy Policy" data={applications.intime.privacy} />
