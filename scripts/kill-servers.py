import subprocess
import os

ports = [3000, 3001]
netstat = subprocess.check_output('netstat -ano', shell=True).decode()
pids = set()
for line in netstat.splitlines():
    if 'LISTENING' in line:
        for p in ports:
            if f':{p} ' in line:
                parts = line.strip().split()
                pid = parts[-1]
                pids.add(pid)

print("Found PIDs listening on 3000/3001:", pids)

for pid in pids:
    if pid != '0':
        cmd = f'taskkill /F /T /PID {pid}'
        print("Executing:", cmd)
        res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        print(res.stdout, res.stderr)
