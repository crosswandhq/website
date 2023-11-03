<script lang="ts">
	import { applications } from '$lib/data/data';
  import AppDetailPage from '../templates/app_detail_page.svelte';
</script>

<AppDetailPage data={applications.moli} />