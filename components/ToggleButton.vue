<template>
    <label for="toggle_button">
        <!-- <span v-if="isActive">English</span>
        <span v-if="!isActive">French</span> -->

        <!-- <input type="checkbox" id="toggle_button" v-model="checkedValue">
        <span class="toggle__switch"></span> -->
        <input type="checkbox" id="switch"
                    class="checkbox" />
        <label for="switch" class="toggle">
             
 
<p>OFF    ON</p>
 
 
        </label>
    </label>
</template>
<script>
export default {
    props: {
        defaultState: {
            type: Boolean, 
            default: false
        }
    },

    data() {
        return {
            currentState: this.defaultState
        }
    },

    computed: {
        isActive() {
            return this.currentState;
        },

        checkedValue: {
            get() {
                return this.defaultState
            },
            set(newValue) {
                this.currentState = newValue;
                this.$emit('change', newValue);
            }
        }
    }
}
</script>

<style scoped>
h1 {
            color: green;
        }
               
        /* toggle in label designing */
        .toggle {
            position : relative ;
            display : inline-block;
            width : 100px;
            height : 52px;
            background-color: red;
            border-radius: 30px;
            border: 2px solid gray;
        }
               
        /* After slide changes */
        .toggle:after {
            content: '';
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: gray;
            top: 1px;
            left: 1px;
            transition:  all 0.5s;
        }
               
        /* Toggle text */
        p {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
        }
               
        /* Checkbox checked effect */
        .checkbox:checked + .toggle::after {
            left : 49px;
        }
               
        /* Checkbox checked toggle label bg color */
        .checkbox:checked + .toggle {
            background-color: green;
        }
               
        /* Checkbox vanished */
        .checkbox {
            display : none;
        }
/* .toggle__button {
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
}
.toggle__button input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
}
.toggle__button .toggle__switch {
    display:inline-block;
    height:12px;
    border-radius:6px;
    width:40px;
    background: #BFCBD9;
    box-shadow: inset 0 0 1px #BFCBD9;
    position:relative;
    margin-left: 10px;
    transition: all .25s;
}

.toggle__button .toggle__switch::after, 
.toggle__button .toggle__switch::before {
    content: "";
    position: absolute;
    display: block;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    left: 0;
    top: -3px;
    transform: translateX(0);
    transition: all .25s cubic-bezier(.5, -.6, .5, 1.6);
}

.toggle__button .toggle__switch::after {
    background: #4D4D4D;
    box-shadow: 0 0 1px #666;
}
.toggle__button .toggle__switch::before {
    background: #4D4D4D;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
    opacity:0;
} */
</style>