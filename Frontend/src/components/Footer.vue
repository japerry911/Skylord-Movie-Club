<template>
    <div class='main-div-footer'>
        <div class='social-icons-div'>
            <a href='#' class='fa fa-facebook'></a>
            <a href='#' class='fa fa-twitter'></a>
            <a href='#' class='fa fa-linkedin'></a>
            <a href='#' class='fa fa-instagram'></a>
        </div>
        <figure>
            <router-link
                tag='img'
                to='/'
                alt='Skylord Movie Club Logo'
                src='https://skylord-movie-club.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png'
            />
        </figure>
        <div class='menu-div'>
            <ul>
                <div class='list-links' v-if='authed'>
                    <li
                        v-for='(link, index) in authedLinks'
                        :key='index'
                    >
                        <router-link
                            :to='link.path'
                        >
                            {{ link.text }}
                        </router-link>
                    </li>
                </div>
                <div class='list-links' v-else>
                    <li
                        v-for='(link, index) in nonAuthedLinks'
                        :key='index'
                    >
                        <router-link
                            :to='link.path'
                        >
                            {{ link.text }}
                        </router-link>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        navLinks: Array
    },
    computed: {
        authed () {
        return this.$store.getters.isAuthed
        },
        authedLinks () {
        return this.navLinks.filter(linkObject => linkObject.access === 'both' || linkObject.access === 'auth')
        },
        nonAuthedLinks () {
        return this.navLinks.filter(linkObject => linkObject.access === 'both' || linkObject.access === 'non-auth')
        }
    }
}
</script>

<style scoped lang='scss'>
div.main-div-footer {
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 120px;
    padding: 1rem 5rem;
    width: 100%;

    .social-icons-div {
        display: flex;
        justify-content: space-evenly;
        width: 33.33%;

        .fa {
            padding: 15px;
            width: 50px;
            font-size: 20px;
            text-decoration: none;
            display: flex;
            justify-content: center;
            border-radius: 50%;
        }

        .fa:hover {
            opacity: 0.7;
        }

        .fa-facebook {
            background: #3B5998;
            color: white;
        }

        .fa-twitter {
            background: #55ACEE;
            color: white;
        }

        .fa-linkedin {
            background: #007bb5;
            color: white;
        }

        .fa-instagram {
            background: #125688;
            color: white;
        }
    }

    figure {
        width: 33.33%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 30%;
            height: auto;
            cursor: pointer;
        }
    }

    .menu-div {
        height: 100%;
        width: 33.33%;
        display: flex;
        justify-content: center;
        align-items: center;

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            width: 100%;

            .list-links {
                width: 100%;
                height: 100%;

                li {
                    list-style-type: none;
                    width: 100%;
                    display: flex;
                    justify-content: center;

                    a {
                        color: $primaryOrange;
                        text-decoration: none;
                        width: 80%;
                        text-align: center;
                        font-weight: bold;
                    }

                    a:hover {
                        background-color: #F67743;
                        color: #fff;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 650px) and (max-width: 768px) {
    div.main-div-footer {
        flex-direction: column-reverse;
        min-height: 200px;

        .social-icons-div {

            .fa {
                width: 30px;
                padding: 5px;
            }
        }

        figure {
            width: 90%;
        }

        .menu-div {
            width: 50%;

            ul {

                li {

                    a {
                        padding: 0.5rem 0;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 649px) {
    div.main-div-footer {
        flex-direction: column-reverse;
        min-height: 200px;

        .social-icons-div {
            width: 100%;

            .fa {
                width: 30px;
                padding: 5px;
            }
        }

        figure {
            width: 100%;

            img {
                width: 80%;
            }
        }

        .menu-div {
            width: 100%;

            ul {

                li {

                    a {
                        font-size: 0.8rem;
                        padding: 0.5rem 0;
                    }
                }
            }
        }
    }
}
</style>