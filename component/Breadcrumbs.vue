<template>
  <div class="container">
    <ol class="inline-flex gap-4 text-xl ml-8">
        <li class="flex flex-col items-center sectionItem hover:cursor-pointer">
            <div class="relative w-fit">
                <p @click="handleSectionBreadcrumb(breadcrumbs.currentSection)">Our Women - {{ breadcrumbs.currentSection.name }} </p>
                <div class="w-full bg sectionDropdown rounded-lg shadow-xl border border-gray-300 w-fit self-center absolute text-center">
                    <ul class="grid grid-cols-1 divide-y divide-gray-300">
                        <li v-for="s of breadcrumbs.sections.filter((x) => x.name !== breadcrumbs.currentSection.name)" class="py-2 hover:text-red" @click="handleSectionBreadcrumb(s)">{{ s.name }}</li>
                    </ul>
                </div>
            </div>
        </li>
        <li>
            <p> > </p>
        </li>
        <li class="flex flex-col items-center personItem hover:cursor-pointer">
            <div class="relative w-fit">
                <p> {{ breadcrumbs.currentPerson.name }} {{ breadcrumbs.currentPerson.surname }} </p>
                <div class="calcWidth bg personDropdown rounded-lg shadow-xl border border-gray-300 w-fit self-center absolute text-center px-2">
                    <ul class="grid grid-cols-1 divide-y divide-gray-300">
                        <li v-for="p of breadcrumbs.currentSection.people.filter((x) => x.name !== breadcrumbs.currentPerson.name)" class="p-2 hover:text-red" @click="handlePersonBreadcrumb(p)">{{ p.name }} {{ p.surname }}</li>
                    </ul>
                </div>
            </div>
        </li>
    </ol>
  </div>
</template>

<script setup>
    import { useBreadcrumbStore } from '~/stores/breadcrumb';
    const breadcrumbs = useBreadcrumbStore();

    function handlePersonBreadcrumb(newPerson) {
        const found = breadcrumbs.currentSection.people.filter((x) => x.name === newPerson.name)[0];
        if (found) {
            breadcrumbs.setCurrentPerson(newPerson);
            navigateTo(`/our_women/${found.person_id}`);
        }
    }

    function handleSectionBreadcrumb(newSection) {
        breadcrumbs.setCurrentSection(newSection);
        navigateTo(`/our_women`);
    }


</script>

<style>

.calcWidth {
    width: fit-content;
    min-width: 100%;
}

.personDropdown {
    display: none;
}

.personItem:hover .personDropdown {
    display: block;
}


.sectionDropdown {
    display: none;
}

.sectionItem:hover .sectionDropdown {
    display: block;
}

.bg {
    background-color: #ebebeb;
}

</style>