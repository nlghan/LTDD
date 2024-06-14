import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ScrollView } from 'react-native';

interface Lap {
  lapTime: string;
  elapsedTime: string;
}

const App = (): React.JSX.Element => {
  const [timeElapsed, setTimeElapsed] = useState("00:00,00");
  const [running, setRunning] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [laps, setLaps] = useState<Lap[]>([]);
  const [startStopText, setStartStopText] = useState('Start');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        if (startTime) {
          const elapsed = getElapsedTime(startTime);
          setTimeElapsed(elapsed);
          setLaps((prevLaps) => {
            if (prevLaps.length > 0) {
              const updatedLaps = [...prevLaps];
              const currentLapIndex = 0;
              updatedLaps[currentLapIndex] = {
                ...updatedLaps[currentLapIndex],
                lapTime: getLapTime(),
              };
              return updatedLaps;
            }
            return prevLaps;
          });
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [running, startTime]);

  const handleStartPress = () => {
    if (running && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setRunning(false);
      setStartTime(null);
      setStartStopText('Start');
      return;
    }

    const newStartTime = new Date();
    const firstLap: Lap = {
      lapTime: "00:00,00",
      elapsedTime: timeElapsed,
    };
    setLaps([firstLap, ...laps]);
    setStartTime(newStartTime);
    setRunning(true);
    setStartStopText('Stop');
    intervalRef.current = setInterval(() => {
      const elapsed = getElapsedTime(newStartTime);
      setTimeElapsed(elapsed);
    }, 30);
  };

  const handleLapPress = () => {
    if (!running || !startTime) {
      return;
    }

    const lapTime = getLapTime();
    const lap: Lap = {
      lapTime,
      elapsedTime: timeElapsed,
    };

    setLaps([lap, ...laps]);
    setStartTime(new Date()); 
  };

  const handleResetPress = () => {
    resetElapsedTime(); // Đặt lại elapsedTime về "00:00,00"
    setLaps([]);
    setStartTime(null); 
    setStartStopText('Start');
  };

  const resetElapsedTime = () => {
    setTimeElapsed("00:00,00");
  };

  const getElapsedTime = (startTime: Date) => {
    const currentTime = new Date();
    const elapsedTime = currentTime.getTime() - startTime.getTime();
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    return `${padNumber(minutes)}:${padNumber(seconds)},${padNumber(milliseconds, 2)}`;
  };

  const getLapTime = () => {
    const currentTime = new Date();
    const lapElapsedTime = currentTime.getTime() - (startTime ? startTime.getTime() : currentTime.getTime());
    const minutes = Math.floor((lapElapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((lapElapsedTime / 1000) % 60);
    const milliseconds = Math.floor((lapElapsedTime % 1000) / 10);
    return `${padNumber(minutes)}:${padNumber(seconds)},${padNumber(milliseconds, 2)}`;
  };

  const padNumber = (num: number, length = 2) => {
    return num.toString().padStart(length, '0');
  };

  const lapOrResetButton = () => {
    if (running) {
      return (
        <TouchableHighlight
          style={[styles.btn, styles.resetButton]}
          underlayColor="gray"
          onPress={handleLapPress}
          disabled={false}
        >
          <Text style={styles.textBtn}>Lap</Text>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight
          style={[styles.btn, styles.resetButton]}
          underlayColor="gray"
          onPress={handleResetPress}
          disabled={laps.length === 0}
        >
          <Text style={styles.textBtn}>Reset</Text>
        </TouchableHighlight>
      );
    }
  };

  const renderLap = (lap: Lap, index: number) => {
    const lapTimeInMilliseconds = lapTimeToMilliseconds(lap.lapTime);
    const maxLapTime = Math.max(...laps.map((lap) => lapTimeToMilliseconds(lap.lapTime)));
    const minLapTime = Math.min(...laps.map((lap) => lapTimeToMilliseconds(lap.lapTime)));

    let lapColorStyle = {};
    if (lapTimeInMilliseconds === maxLapTime) {
      lapColorStyle = { color: 'red' };
    } else if (lapTimeInMilliseconds === minLapTime) {
      lapColorStyle = { color: 'green' };
    }

    return (
      <View style={styles.lap} key={index}>
        <Text style={[styles.textLap, lapColorStyle]}>Lap {laps.length - index}</Text>
        <Text style={[styles.textLap, lapColorStyle]}>{lap.lapTime}</Text>
      </View>
    );
  };

  const lapTimeToMilliseconds = (lapTime: string) => {
    const [minutesStr, rest] = lapTime.split(':');
    const [secondsStr, millisecondsStr] = rest.split(',');
    
    const minutes = parseInt(minutesStr, 10);
    const seconds = parseInt(secondsStr, 10);
    const milliseconds = parseInt(millisecondsStr, 10);
  
    return (minutes * 60 + seconds) * 1000 + milliseconds;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>{timeElapsed}</Text>
      </View>
      <View style={styles.wrapBtn}>
        {lapOrResetButton()}
        <TouchableHighlight
          style={[styles.btn, running ? styles.stopButton : styles.startButton]}
          underlayColor="gray"
          onPress={handleStartPress}
        >
          <Text style={[styles.textBtn, running ? styles.stopText : styles.startText]}>{startStopText}</Text>
        </TouchableHighlight>

      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {laps.map(renderLap)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    marginTop: 100,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 75,
    color: 'white',
  },
  wrapBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginLeft: 25,
    marginRight: 25,
  },
  btn: {
    borderColor: '#736d6d69',
    borderRadius: 50,
    borderWidth: 2,
    height: 85,
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#736d6d69',
  },
  resetButton: {
    backgroundColor: '#736d6d69',
  },
  startButton: {
    backgroundColor: '#9bf28f63',
  },
  stopButton: {
    backgroundColor: '#f2a99563',
  },
  textBtn: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
  },
  startText: {
    color: 'green',
  },
  stopText: {
    color: 'red',
  },
  lap: {
    marginBottom: 10,
    paddingHorizontal:15,
    flexDirection: 'row',
   justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
  },
  textLap: {
    fontSize: 25,
    color: 'white',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
});

export default App;
