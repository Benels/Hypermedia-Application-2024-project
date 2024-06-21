<template>
  <div class="chat-container pointer-events-auto">
    <div class="chat-header">
      <p class="pl-4">Jarvis - Your personal Assistant</p>
      <div @click="$emit('handle')" class="closeIcon rounded-md"> <img src="~/assets/svgs/close_x_white.svg"/> </div>
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
            <!--{{ content.text }}-->
            <div v-html="content.text"></div>
            <button @click="speak(content.text)">🔊</button>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-input-container">
      <input class="chat-input" v-model="input" @keyup.enter="sendMsg" placeholder="Type your message..." />
      <button class="send-button" @click="sendMsg">Send</button>
      <button class="TTSbutton" @click="startRecognition" title="Start voice msg">🎙️</button>
      <button class="TTSbutton" @click="stopRecognition" title="Stop voice msg">⏹️</button>
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
      recognition: null,
      recognitionActive: false
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
        this.recognition.continuous = true;
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
          this.recognitionActive = false;
          console.log("Speech recognition ended.");
        };
      } else {
        console.error("Speech recognition not supported in this browser.");
      }
    },

    startRecognition() {
      if (this.recognition && !this.recognitionActive) {
        this.recognition.start();
        this.recognitionActive = true;
      }
    },

    stopRecognition() {
      if (this.recognition && this.recognitionActive) {
        this.recognition.stop();
      }
    },

    speak(text) {
      if ('speechSynthesis' in window) {
        if (this.speechSynthesisActive) {
          window.speechSynthesis.cancel();
          this.speechSynthesisActive = false;
          return;
        }

        text = text.replace(/<u><a href="[^"]*" target="_blank">(.*?)<\/a><\/u>/g, '$1');

        window.speechSynthesis.getVoices().forEach(voice => {
          console.log(voice.name);
        });
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        //utterance.voice = window.speechSynthesis.getVoices()//.find(voice => voice.name === 'Microsoft Zira Desktop - English (United States)'); Microsoft Zira - English (United States)   Microsoft Susan - English (United Kingdom)
        utterance.voice = window.speechSynthesis.getVoices().filter(function(voice) { return voice.name === 'Microsoft Zira - English (United States)'; })[0];
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

.closeIcon:hover {
  cursor: pointer;
  background-color: #e72727;
}

.closeIcon {
  color: white;
  height: 30px;
  padding: 5px;
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
  background-color: #d62828;
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
  border-left: 10px #d62828;
  margin-top: -10px;
}

.assistant-bubble {
  align-self: flex-start;
  background-color: #ffffff;
  color: #333;
  border: 1px solid #d62828;
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
  position: relative;
}

.chat-input {
  flex-grow: 1;
  padding: 10px 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  margin-right: 4px;
  margin-left: -4px;
}

.send-button {
  padding: 9px 9px;
  background-color: #d62828;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.TTSbutton {
   padding: 9px 9px;
   margin-left: 2px;
   background-color: #d62828;
   color: white;
   border: none;
   border-radius: 20px;
   cursor: pointer;
   transition: background-color 0.3s;
 }

.send-button:hover {
  background-color: #d62828;
}

.message.user {
  justify-content: flex-end;
  text-align: right;
}

.chat-header {
  background-color: #d62828;
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
  align-items: center;
}



@media (max-width: 768px) {
  .chat-container {
    max-width: 100%;
    height: calc(100vh - 72px/*nav bar*/);
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .chat-input-container{
    padding: 10px;
    border-top: 1px solid #ccc;
    background-color: #f9f9f9;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .chat-box {
    padding-bottom: 70px;
  }
}

@media (min-width: 768px) {
  .chat-container {
    max-width: 80%;
    max-height: 85vh;
  }

}
@media (min-width: 768px) and (max-height: 690px) { /*ipad, forse*/
  .chat-container {
    max-width: 80%;
    max-height: 77vh;
  }
}

</style>