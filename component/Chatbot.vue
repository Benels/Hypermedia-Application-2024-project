<template>
  <div class="chat-container">
    <div class="chat-header">
      <p class="pl-4">Jarvis - Your personal Assistant</p>
      <div @click="$emit('handle')" class="closeIcon"> <img src="~/assets/svgs/close_x.svg"/> </div>
    </div>
    <div class="chat-box" ref="chatBox">
      <div v-for="(msg, i) in messages" :key="i" class="msg">
        <div class="message user" v-if="msg.role === 'user'">
          <div class="user-bubble" v-for="(content, contentIndex) in msg.content" :key="contentIndex">
            {{ content.text }}
          </div>
        </div>
        <div class="message assistant" v-else>
          <div class="assistant-bubble" v-for="(content, contentIndex) in msg.content" :key="contentIndex">
            {{ content.text }}
            <button @click="speak(content.text)">🔊</button>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-input-container">
      <input class="chat-input" v-model="input" @keyup.enter="sendMsg" placeholder="Type your message..." />
      <button class="send-button" @click="sendMsg">Send</button>
      <button class="TTSbutton" @click="startRecognition">🎙️</button>
      <button class="TTSbutton" @click="stopRecognition">⏹️</button>
    </div>
  </div>
</template>




<script>

  export default {
  data() {
    return {
      messages: [{ role: 'assistant', content: [{ text: "Hi, I am Jarvis, how can I help you?", type: 'text' }] }],
      input: '',
      speechSynthesisActive: false,
      recognition: null
    };
  },
  mounted() {
    this.setupRecognition();
  },
  methods: {
    async sendMsg() {
      this.messages.push({ role: 'user', content: [{ text: this.input, type: 'text' }] });
      const userInput = this.input;
      this.input = '';
      try {
        const res = await fetch('/api/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: this.messages })
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        if (data.choices && data.choices.length > 0 && data.choices[0].message.content) {
          this.messages.push({ role: 'assistant', content: [{ text: data.choices[0].message.content, type: 'text' }] });
        } else {
          throw new Error('Empty or invalid response from server');
        }

        this.scrollToBottom();
      } catch (error) {
        console.error("Error:", error);
      }
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const chatBox = this.$refs.chatBox;
        chatBox.scrollTop = chatBox.scrollHeight;
      });
    },

    setupRecognition() {
      if ('webkitSpeechRecognition' in window) {
        this.recognition = new webkitSpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';

        this.recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          this.input = transcript;
          this.sendMsg();
        };

        this.recognition.onerror = (event) => {
          console.error("Speech recognition error:", event);
        };

        this.recognition.onend = () => {
          console.log("Speech recognition ended.");
        };
      } else {
        console.error("Speech recognition not supported in this browser.");
      }
    },

    startRecognition() {
      if (this.recognition) {
        this.recognition.start();
      }
    },

    /*stopRecognition() {
      //if (this.recognition) {
      // this.recognition.stop();
      //}
    },*/
    stopRecognition() {
      if (this.recognitionActive && this.recognition) {
        this.recognition.stop();
        this.recognitionActive = false;
      }
    },

    speak(text) {
      if ('speechSynthesis' in window) {
        if (this.speechSynthesisActive) {
          window.speechSynthesis.cancel();
          this.speechSynthesisActive = false;
          return;
        }

        //console.log(window.speechSynthesis.getVoices());
        window.speechSynthesis.getVoices().forEach(voice => {
          console.log(voice.name);
        });
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        //utterance.voice = window.speechSynthesis.getVoices()//.find(voice => voice.name === 'Microsoft Zira Desktop - English (United States)');
        utterance.voice = window.speechSynthesis.getVoices().filter(function(voice) { return voice.name === 'Microsoft Zira Desktop - English (United States)'; })[0];
        window.speechSynthesis.speak(utterance);
        this.speechSynthesisActive = true;

      } else {
        console.error("Text-to-speech not supported in this browser.");
      }
    }
  }
};
</script>

<style scoped>
body {
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
}


@media (max-width: 768px) {  /* until md */
  .chat-container {
    max-width: 100%;
    height: 100%;
  }
}

@media (min-width: 768px) {
  .chat-container {
    max-width: 80%;
    max-height: 90vh;
  }
}

.closeIcon:hover {
  cursor: pointer;
  background-color: #ccc;
}

.closeIcon {
  color: white;
  height: 25px;
  aspect-ratio: 1/1;
  margin-right: 5px;
}

.closeIcon > img {
  height: 100%;
  aspect-ratio: 1/1;
  fill: white;
}


.chat-container {
  width: 100%;
  align-self: end;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.chat-box {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
}

.message {
  max-width: 90%;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}

.user-bubble,
.assistant-bubble {
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 20px;
  position: relative;
  display: inline-block;
}

.user-bubble {
  align-self: flex-end;
  background-color: #ff6f61;
  color: white;
  margin-left: auto;
  text-align: right;
  flex-direction: row-reverse;
}

.user-bubble::before {
  content: "";
  position: absolute;
  top: 0;
  right: -20px;
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-bottom-width: 10px;
  border-left: 10px #ff6f61;
  margin-top: -10px;
}

.assistant-bubble {
  align-self: flex-start;
  background-color: #ffffff;
  color: #333;
  border: 1px solid #ff6f61;
}

.assistant-bubble::before {
  content: "";
  position: absolute;
  top: 0;
  left: -20px;
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-right: 10px #ffffff;
  border-bottom-width: 10px;
  margin-top: -10px;
  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
}

.chat-input-container {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #f9f9f9;
}

.chat-input {
  flex-grow: 1;
  padding: 10px 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  margin-right: 10px;
}

.send-button {
  flex-grow: 1;
  padding: 10px 10px;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.TTSbutton {
   flex-grow: 1;
   padding: 10px 10px;
   margin-left: 3px;
   background-color: #ff6f61;
   color: white;
   border: none;
   border-radius: 20px;
   cursor: pointer;
   transition: background-color 0.3s;
 }

.send-button:hover {
  background-color: #ff5a4d;
}

.message.user {
  justify-content: flex-end;
  text-align: right;
}

.chat-header {
  background-color: #ff6f61; /* Corallo */
  color: white;
  padding: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>