package proto2json.console;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.protobuf.CodedInputStream;
import com.google.protobuf.Descriptors;
import com.google.transit.realtime.GtfsRealtime;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class main {
    public static String[] filenames = {
            "gtfs.1",
            "gtfs.10",
            "gtfs.11",
            "gtfs.12",
            "gtfs.13",
            "gtfs.14",
            "gtfs.15",
            "gtfs.16",
            "gtfs.17",
            "gtfs.18",
            "gtfs.19",
            "gtfs.2",
            "gtfs.20",
            "gtfs.3",
            "gtfs.4",
            "gtfs.5",
            "gtfs.6",
            "gtfs.7",
            "gtfs.8",
            "gtfs.9"
    };

    public static void main(String[] args) throws IOException {
        final Map<String, Stops.Stop> stops = Stops.load("stops.txt");

        System.out.println("Hello MTA");
        String path = "../data/Hackathon/";

        HashMap<String, Object> update = new HashMap<String, Object>();

        update.put("title", "train arrival update");

        final ArrayList<Map<String, Object>> trains = new ArrayList<Map<String, Object>>();

        for (String filename : filenames) {
            FileInputStream fis = new FileInputStream(new File(path + filename));

            CodedInputStream cis = CodedInputStream.newInstance(fis);

            final GtfsRealtime.FeedMessage feedMessage = GtfsRealtime.FeedMessage.parseFrom(cis);

            for (GtfsRealtime.FeedEntity fe : feedMessage.getEntityList()) {
                final Map<Descriptors.FieldDescriptor, Object> allFields = fe.getAllFields();

                final GtfsRealtime.TripUpdate tripUpdate = fe.getTripUpdate();
                char directionCode = tripUpdate.getTrip().getTripId().charAt(10);
                String routeId = tripUpdate.getTrip().getRouteId();

                HashMap<String, Object> train = new HashMap<String, Object>();
                train.put("number", routeId);


                List<HashMap<String, String>> train_stops = new ArrayList<HashMap<String, String>>();


                final List<GtfsRealtime.TripUpdate.StopTimeUpdate> stopTimeUpdateList = tripUpdate.getStopTimeUpdateList();

                for (GtfsRealtime.TripUpdate.StopTimeUpdate stopTimeUpdate : stopTimeUpdateList) {
                    HashMap<String, String> stop = new HashMap<String, String>();
                    stop.put("stationID", stopTimeUpdate.getStopId());
                    stop.put("stoptime", String.valueOf(stopTimeUpdate.getDeparture().getTime()));
                    stop.put("name", stops.get(stopTimeUpdate.getStopId()).getStopName());
                    train_stops.add(stop);
                }

                if (directionCode == 'N') {
                    train.put("northbound", null);
                } else {
                    train.put("southbound", null);
                }
//                train.put("stops", train_stops);

                if (directionCode == 'N') {
                    train.put("northbound", train_stops);
                } else {
                    train.put("southbound", train_stops);
                }

//                for (Descriptors.FieldDescriptor fieldDescriptor : allFields.keySet()) {
//                    System.out.println(fieldDescriptor.getFullName() + " = " + fe.getField(fieldDescriptor).toString());
//                }

                trains.add(train);
            }
        }
        Gson gson = new GsonBuilder().setPrettyPrinting().create();


        System.out.println(gson.toJson(trains));
    }
}
