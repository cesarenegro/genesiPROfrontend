import subprocess

netstat = subprocess.check_output('netstat -ano', shell=True).decode()
pids = set()
for line in netstat.splitlines():
    if ':3000 ' in line and 'LISTENING' in line:
        parts = line.strip().split()
        pids.add(parts[-1])

print("PIDs listening on 3000:", list(pids))

for pid in pids:
    if pid != '0':
        cmd = f'powershell -Command "Get-CimInstance Win32_Process -Filter \\"ProcessId = {pid}\\" | Select-Object ProcessId, ParentProcessId, Name, CommandLine | Format-List"'
        res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        print("--- Process Info for PID", pid, "---")
        print(res.stdout)
        
        # Check parent as well
        lines = [l.strip() for l in res.stdout.splitlines() if l.startswith('ParentProcessId')]
        if lines:
            parent_pid = lines[0].split(':')[-1].strip()
            cmd_parent = f'powershell -Command "Get-CimInstance Win32_Process -Filter \\"ProcessId = {parent_pid}\\" | Select-Object ProcessId, ParentProcessId, Name, CommandLine | Format-List"'
            res_parent = subprocess.run(cmd_parent, shell=True, capture_output=True, text=True)
            print("--- Parent Info for ParentPID", parent_pid, "---")
            print(res_parent.stdout)
