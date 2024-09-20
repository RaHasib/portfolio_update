---
date: '2023-11-09T06:55:10.818Z'
title: How to Host a Website on ESP32 Webserver with Microdot
tagline: 'ESP32 , IDE, IOT'
preview: 'Learn how to host a web server on ESP32. '
image: >-
  https://images.unsplash.com/photo-1631376604263-5d803038b389?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---
<<<<<<< HEAD
## Create a Simple Website Using ESP32 and Microdot

In this project, I’ll show you how to create a simple website hosted on an **ESP32** using **Microdot**, a lightweight web framework for **MicroPython**. The website will be accessible on any device connected to the same network as the ESP32, and you can also use **ngrok** to expose it to the internet.

### Prerequisites

Before we begin, you will need:

- **ESP32 board** with a USB cable
- A computer with **Thonny IDE** or **VS Code** with **PlatformIO** installed
- A **Wi-Fi network** with internet access
- The **MicroPython firmware** for ESP32
- The **Microdot** library for MicroPython

---

### Steps to Follow

#### 1. Flash the ESP32 with MicroPython Firmware

- Flash the ESP32 board with MicroPython.
- Connect the ESP32 to your computer via USB.
- Open **Thonny IDE** or **VS Code** (with **PlatformIO**) and select the correct COM port for the ESP32.
- Ensure communication with the ESP32 through the terminal.

#### 2. Write the Code to Connect ESP32 to Wi-Fi and Start Webserver

- In the root directory of your ESP32, locate or create the file `boot.py`.
- Add the following code to automatically connect the ESP32 to your Wi-Fi network and start the webserver:

    ```python
    import network
    import utime
    from microdot import Microdot, send_file

    # Configure your SSID and password here.
    SSID = "your_wifi_ssid"
    SSI_PASSWORD = "your_wifi_password"

    def do_connect():
        # Initialize network interface.
        sta_if = network.WLAN(network.STA_IF)
        
        if not sta_if.isconnected():
            print('Connecting to network...')
            sta_if.active(True)
            sta_if.connect(SSID, SSI_PASSWORD)
            
            # Wait until connection is established.
            while not sta_if.isconnected():
                pass
        
        print('Connected! Network config:', sta_if.ifconfig())

    # Call the connection function
    print("Connecting to your Wi-Fi...")
    do_connect()

    # Create a new Microdot instance
    app = Microdot()

    # Route the index page to serve 'index.html'
    @app.route('/')
    def index(request):
        return send_file('index.html')

    # Run the server on port 80
    app.run(port=80)
    ```

#### 3. Create an HTML File for Your Website

- In the root directory of the ESP32, create an `index.html` file with the following code to build a simple webpage:

    ```html
    <html>
        <head>
            <style>
                h1 {
                    color: blue;
                    text-align: center;
                }

                button {
                    display: block;
                    margin: auto;
                    width: 200px;
                    height: 50px;
                    font-size: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Welcome to my ESP32 website :)</h1>
            <button onclick="alert('Hello from ESP32!')">Click me</button>
        </body>
    </html>
    ```

#### 4. Add the Microdot Library

- Place the `microdot.py` file from the Microdot library into the root directory of your ESP32.

#### 5. Verify Folder Structure

Your ESP32 folder structure should now look like this:

    ```
    boot.py
    index.html
    microdot.py
    ```

#### 6. Run the Code and Access the Website

- Run the `boot.py` file and wait for the ESP32 to connect to your Wi-Fi network.
- The ESP32's IP address will be printed in the terminal.
- Open a web browser on any device connected to the same network and enter the IP address of the ESP32 in the address bar.
- Your website should now be displayed!

---

>I hope this helps you with your project. Have fun with ESP32 and Microdot! 🐿️
=======
### In this project, I will show you how to create a simple website using ESP32 and Microdot, a lightweight web framework for **MicroPython**. The website will be hosted on the ESP32 webserver and accessible from any device on the same network. You can also use ngrok to expose your website to the internet.

#### To get started, you will need the following:

-   An ESP32 board with a USB cable
-   A computer with Thonny IDE or VS Code with PlatformIO installed
-   A Wi-Fi network with internet access
-   The MicroPython firmware for ESP32
-   The Microdot library for MicroPython

#### The steps are as follows:

- Flash the ESP32 with the MicroPython firmware. 
- Connect the ESP32 to your computer using the USB cable and open Thonny IDE or VS Code with PlatformIO. Select the correct COM port for your ESP32 board and make sure you can communicate with it using the terminal.
- In the root directory of your ESP32,  You will see a file name `boot.py`. This file will run automatically when the ESP32 boots up . Try to write some code here to connect to the Wi-Fi network and start the webserver. You can use the following code :
 

```
import network, utime
from microdot import Microdot
from microdot import send_file
    
 SSID = "your_wifi_ssid "
 SSI_PASSWORD = "WIFI_PASSWORD"
    
 def do_connect():
   import network
   sta_if = network.WLAN(network.STA_IF)
    if not sta_if.isconnected():
      print('connecting to network...')
      sta_if.active(True)
      sta_if.connect(SSID, SSI_PASSWORD)
      while not sta_if.isconnected():
       pass
   print('Connected! 
    Network config:', sta_if.ifconfig())
        
  print("Connecting to your wifi...")
  do_connect()
    
   - web server code starts here
  app = Microdot()
    
  @app.route('/')
  def index(request):
    return send_file('index.html')
    
    app.run(port=80)

```


- In the root directory of your ESP32, create a file named `index.html`. This file will contain the HTML code for your website. You can use any HTML tags, CSS styles, and JavaScript scripts you want. For 
      example, you can use the following code to create a simple webpage with a title and a button
 

```
 <html>
    <head>
        <style>
            h1 {
                color: blue;
                text-align: center;
            }
    
            button {
                display: block;
                margin: auto;
                width: 200px;
                height: 50px;
                font-size: 20px;
            }
        </style>
   </head>
   <body>
  <h1>Welcome to my ESP32 website :)
  </h1>
  <button 
  onclick="alert('Hello from ESP32!')">
  Click me
  </button>
  </body>
  </html>

```


- In the root directory of your ESP32, copy the `microdot.py` file from the Microdot library . 
- Your root folder structure should look like this:


```
boot.py
index.html
microdot.py

```


>Run the `boot.py` file and wait until the ESP32 connects to the Wi-Fi network. You should see the IP address of the ESP32 printed on the terminal.
> Open a web browser on any device connected to the same network and enter the IP address of the ESP32 in the address bar. You should see your website displayed on the browser.

I hope this helps you with your project. Have fun with ESP32 and Microdot! 🐿️
>>>>>>> cbb8909f25c76a5b6205c56e6dcea70a557eaeb1
