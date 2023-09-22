
                <script>
                    function calculatePeriod() {
                        // Retrieve form values
                        let name = document.getElementById("name").value;
                        let age = document.getElementById("age").value;
                        let lastPeriod = document.getElementById("lastPeriod").value;
                        let cycleLength = document.getElementById("cycleLength").value;
                        let periodLength = document.getElementById("periodLength").value;
                        let bloodFlow = document.getElementById("bloodFlow").value;
                        let healthyDiet = document.getElementById("healthyDiet").value;
                        let exercise = document.getElementById("exercise").value;
                        let hotWater = document.getElementById("hotWater").value;
            
                        // Calculate next period date and ovulation date
                        let lastPeriodDate = new Date(lastPeriod);
                        let ovulationDate = new Date(lastPeriodDate.getTime() + ((cycleLength - 14) * 86400000));
                        let nextPeriodDate = new Date(lastPeriodDate.getTime() + (cycleLength * 86400000));
            
                        // Calculate period health and most active cramp time
                        let periodHealth = "";
                        let crampTime = "";
                        if (bloodFlow === "high") {
                            periodHealth = "Poor";
                            crampTime = "First 2-3 days";
                        } else if (bloodFlow === "medium") {
                            periodHealth = "Good";
                            crampTime = "First day";
                        } else if (bloodFlow === "low") {
                            periodHealth = "Excellent";
                            crampTime = "No cramps";
                        }
            
                        // Display results in HTML table
                        document.getElementById("nextPeriodDate").innerHTML = nextPeriodDate.toDateString();
                        document.getElementById("periodHealth").innerHTML = periodHealth;
                        document.getElementById("crampTime").innerHTML = crampTime;
                        document.getElementById("ovulationDate").innerHTML = ovulationDate.toDateString();
            
                        // Set alert for next period date
                        let now = new Date();
                        let timeDiff = nextPeriodDate.getTime() - now.getTime();
                        let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
                        alert("Your next period is in " + daysDiff + " days.");
                    }
                </script>
            
