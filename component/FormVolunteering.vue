<template>
  <form @submit.prevent="submit" class="w-full max-w-lg mx-auto p-4">
    <div class="md:flex md:space-x-4 md:w-full">
      <div class="mb-4 md:w-full/2">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input type="text" v-model="name" :class="{'border-red-500': nameError}" id="name" placeholder="John" aria-label="Name input field" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <p v-if="nameError" class="text-red-500 text-xs italic">{{ nameError }}</p>
      </div>
      <div class="mb-4 md:w-full/2">
        <label for="surname" class="block text-gray-700 text-sm font-bold mb-2">Surname:</label>
        <input type="text" v-model="surname" :class="{'border-red-500': surnameError}" id="surname" placeholder="Doe" aria-label="Surname input field" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <p v-if="surnameError" class="text-red-500 text-xs italic">{{ surnameError }}</p>
      </div>
    </div>
    <div class="md:flex md:space-x-4 md:w-full">
      <div class="mb-4 md:w-full/2">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">E-mail:</label>
        <input type="email" v-model="email" :class="{'border-red-500': emailError}" id="email" placeholder="example@mail.com" aria-label="Email input field" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <p v-if="emailError" class="text-red-500 text-xs italic">{{ emailError }}</p>
      </div>
      <div class="mb-4 md:w-full/2">
        <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
        <input type="text" v-model="phone" :class="{'border-red-500': phoneError}" id="phone" placeholder="1234567890" aria-label="Phone number input field" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <p v-if="phoneError" class="text-red-500 text-xs italic">{{ phoneError }}</p>
      </div>
    </div>
    <div class="mb-4">
      <label for="occupation" class="block text-gray-700 text-sm font-bold mb-2">Current Occupation:</label>
      <input type="text" v-model="occupation" :class="{'border-red-500': occupationError}" id="occupation" placeholder="Your current occupation" aria-label="Occupation input field" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      <p v-if="occupationError" class="text-red-500 text-xs italic">{{ occupationError }}</p>
    </div>
    <br>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">Please select which days you would be available:</label>
      <!--div class="flex-col gap-4"-->
      <div class="flex-row gap-4">
        <label class="mr-4">
          <input type="checkbox" v-model="days" value="Monday" class="mr-1"> Monday
        </label>
        <label class="mr-4">
          <input type="checkbox" v-model="days" value="Tuesday" class="mr-1"> Tuesday
        </label>
        <label class="mr-4">
          <input type="checkbox" v-model="days" value="Wednesday" class="mr-1"> Wednesday
        </label>
        <label class="mr-4">
          <input type="checkbox" v-model="days" value="Thursday" class="mr-1"> Thursday
        </label>
        <label class="mr-4">
          <input type="checkbox" v-model="days" value="Friday" class="mr-1"> Friday
        </label>
        <label class="mr-4">
          <input type="checkbox" v-model="days" value="Saturday" class="mr-1"> Saturday
        </label>
        <label class="mr-4">
          <input type="checkbox" v-model="days" value="Sunday" class="mr-1"> Sunday
        </label>
      </div>

      <p v-if="daysError" class="text-red-500 text-xs italic">{{ daysError }}</p>
    </div>
    <div class="mb-4">
      <label for="hours" class="block text-gray-700 text-sm font-bold mb-2">Please insert how many hours per week you would be available: </label>
      <input type="number" v-model="hours" :class="{'border-red-500': hoursError}" id="hours" min="1" max="60" placeholder="e.g., 10" aria-label="Hours per week input field" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      <p v-if="hoursError" class="text-red-500 text-xs italic">{{ hoursError }}</p>
    </div>
    <div class="mb-4">
      <label for="text" class="block text-gray-700 text-sm font-bold mb-2">Provide a brief presentation letter: </label>
      <textarea v-model="text" :class="{'border-red-500': textError}" id="text" aria-label="Text message input field" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
      <p v-if="textError" class="text-red-500 text-xs italic">{{ textError }}</p>
    </div>
    <div class="mb-4 text-center">
      <button :disabled="!isFormValid" type="submit" class="custom-submit-button">
        Submit
      </button>
    </div>

    <div v-if="dialog" class="dialog fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  <span v-if="ack === 1" class="text-green-500">Submission successfully sent!</span>
                  <span v-else-if="ack === -1" class="text-red-500">Something went wrong. Please try again.</span>
                  <span v-else>Sending...</span>
                </h3>
              </div>
            </div>
          </div>
          <div v-if="ack !== 0" class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="closeDialog" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      phone: '',
      occupation: '',
      days: [],
      hours: '',
      text: '',
      isFormValid: false,
      dialog: false,
      ack: 0,
      nameError: '',
      surnameError: '',
      emailError: '',
      phoneError: '',
      occupationError: '',
      daysError: '',
      hoursError: '',
      textError: '',
    };
  },
  watch: {
    name(value) {
      this.validateName(value);
    },
    surname(value) {
      this.validateSurname(value);
    },
    email(value) {
      this.validateEmail(value);
    },
    phone(value) {
      this.validatePhone(value);
    },
    occupation(value) {
      this.validateOccupation(value);
    },
    days(value) {
      this.validateDays(value);
    },
    hours(value) {
      this.validateHours(value);
    },
    text(value) {
      this.validateText(value);
    }
  },
  methods: {
    validateName(value) {
      this.nameError = '';
      if (!value) {
        this.nameError = 'Name is required';
      }
      this.checkFormValidity();
    },
    validateSurname(value) {
      this.surnameError = '';
      if (!value) {
        this.surnameError = 'Surname is required';
      }
      this.checkFormValidity();
    },
    validateEmail(value) {
      this.emailError = '';
      const emailPattern = /.+@.+\..+/;
      if (!value) {
        this.emailError = 'E-mail is required';
      } else if (!emailPattern.test(value)) {
        this.emailError = 'E-mail must be valid';
      }
      this.checkFormValidity();
    },
    validatePhone(value) {
      this.phoneError = '';
      if (!value) {
        this.phoneError = 'Phone number is required';
      } else if (isNaN(value)) {
        this.phoneError = 'Phone number must be numeric';
      }
      this.checkFormValidity();
    },
    validateOccupation(value) {
      this.occupationError = '';
      if (!value) {
        this.occupationError = 'Current occupation is required';
      }
      this.checkFormValidity();
    },
    validateDays(value) {
      this.daysError = '';
      if (!value.length) {
        this.daysError = 'At least one day must be selected';
      }
      this.checkFormValidity();
    },
    validateHours(value) {
      this.hoursError = '';
      if (!value) {
        this.hoursError = 'Hours per week are required';
      } else if (value < 1 || value > 60) {
        this.hoursError = 'Hours per week must be between 1 and 60';
      }
      this.checkFormValidity();
    },
    validateText(value) {
      this.textError = '';
      if (!value) {
        this.textError = 'Text is required';
      }
      this.checkFormValidity();
    },
    checkFormValidity() {
      this.isFormValid = !this.nameError && !this.surnameError && !this.emailError && !this.phoneError && !this.occupationError && !this.daysError && !this.hoursError && !this.textError && this.name && this.surname && this.email && this.phone && this.occupation && this.days.length && this.hours && this.text;
    },
    submit() {
      this.dialog = true;
      this.ack = 0;

      setTimeout(() => {
        this.ack = Math.random() > 0.5 ? 1 : -1;
      }, 2000);
    },
    closeDialog() {
      this.dialog = false;
      this.ack = 0;
    }
  }
};
</script>

<style scoped>
.custom-submit-button {
  background-color: #f56565;
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border: 2px solid white;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-block;
  opacity: 1;
}

.custom-submit-button:hover {
  background-color: white;
  color: #d62828;
  border-color: red;
}

.custom-submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.custom-submit-button:disabled:hover {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: red;
  color: white;
  border-color: red;
}

.dialog{
  padding-top: 200px;
}

label{
  font-size: 1rem;
  padding-top: 1rem;
}

p{
  color:red;
}

button{
  background-color: #d62828;
}

button:hover{
  background-color: white;
  color: #d62828;
  border-color: red;
}

span{
  padding-top: 2rem;
  padding-bottom: 2rem;
}


.flex-row {
  display: flex;
  flex-wrap: wrap;
}

.flex-row label {
  flex: 1 1 100%;
}

@media (min-width: 400px) {
  .flex-row label {
    flex: 1 1 40%;
  }
}

@media (min-width: 900px) {
  .flex-row label {
    flex: 1 1 30%;
  }
}

@media (min-width: 1200px) {
  .flex-row label {
    flex: 1 1 25%;
  }
}

.mr-4 {
  margin-right: 1rem;
}

.mr-1 {
  margin-right: 0.25rem;
}
</style>
