import socket

ports = [3000, 3001, 3002, 3003, 3004, 3005, 5173]
all_closed = True
for port in ports:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(0.5)
        res = s.connect_ex(('127.0.0.1', port))
        if res == 0:
            print(f"Port {port}: STILL ACTIVE")
            all_closed = False
        else:
            print(f"Port {port}: CLOSED")

if all_closed:
    print("ALL TARGET PORTS ARE CLOSED SUCCESSFULLY.")
