<template>
    <!-- Profile Github -->
    <div ref="myRef">
        <hr />
        <h3 class="mb-4">Github仓库</h3>
        <div v-for="(item, index) in repos" :key="item.id" class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <h4>
                        <a :href=item.html_url class="text-info" target="_blank">{{item.name}}
                        </a>
                    </h4>
                    <p>{{item.description}}</p>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-info mr-1">
                        Stars: {{item.stargazers_count}}
                    </span>
                    <span class="badge badge-secondary mr-1">
                        Watchers: {{item.watchers_count}}
                    </span>
                    <span class="badge badge-success">
                        Forks: {{item.forks_count}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'profilegithubs',
        data() {
            return {
                clientID: "d6f28e5f58fd81039b22",
                ClientSecret: "1c1d128bfc0b88878b291bb740a501d69b8d67d0",
                count: 5,
                sort: "created:dec",
                repos: []
            }

        },
        props: {
            username: String
        },
        created() {
            //console.log(this.username)
            fetch(`https://api.github.com/users/${this.username}/repos?per_page=${this.count}&sort=${this.sort}&client_id=${this.clientID}&client_secret=${this.ClientSecret}
`).then(result => {
                return result.json()
            }).then(data => {
                console.log(data)
                this.repos = data
            })
        },
    }
</script>


<style scoped>

</style>