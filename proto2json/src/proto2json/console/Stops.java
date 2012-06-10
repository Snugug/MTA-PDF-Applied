package proto2json.console;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class Stops {
    static class Stop {
        Map<String, String> values;
        static String keys[] = {
                "stop_id",
                "stop_code",
                "stop_name",
                "stop_desc",
                "stop_lat",
                "stop_lon",
                "zone_id",
                "stop_url",
                "location_type",
                "parent_station",
        };

        public Stop(String[] strings) {
            values = new HashMap<String, String>();
            for (int i = 0; i < keys.length && i < strings.length; i++) {
                values.put(keys[i], strings[i]);
            }
        }

        public String getStopName() {
            return values.get(keys[2]);
        }

    }

    public static Map<String, Stop> load(String filename) throws IOException {
        HashMap<String, Stop> result = new HashMap<String, Stop>();

        FileInputStream fstream = null;
        DataInputStream in = null;
        try {
            fstream = new FileInputStream(filename);
            in = new DataInputStream(fstream);
            BufferedReader br = new BufferedReader(new InputStreamReader(in));

            String strLine;
            br.readLine(); // Skip the header

            while ((strLine = br.readLine()) != null) {
                final String[] strings = strLine.split(",");

                result.put(strings[0], new Stop(strings));

            }
        } catch (Exception e) {//Catch exception if any
            System.err.println("Error: " + e.getMessage());
        } finally {
            if (fstream != null) {
                fstream.close();
            }
            //Close the input stream
            if (in != null) {
                in.close();
            }

        }

        return result;
    }
}
