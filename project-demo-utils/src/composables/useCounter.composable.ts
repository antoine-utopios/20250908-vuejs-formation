import { reactive, ref } from 'vue';

    export const useCounter = () => {

        // const people = reactive({
            //     firstname: '',
            //     lastname: ''
            // });
            
            
        // const changeFirstName = (newValue: string) => {
            //     people.firstname = newValue;
            // }
            
        const counter = ref(0);

        const increment = () => {
          counter.value++
        };
      
        const decrement = () => {
          counter.value--
        };

        return {
            counter,
            increment,
            decrement
        };
    };
